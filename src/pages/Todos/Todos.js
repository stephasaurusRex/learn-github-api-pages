import get from "lodash.get";
import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import request from "superagent";

import CardList from "../../components/CardList/CardList";
import { fadeColor, fadeIn } from "../../styles";

const { Card } = CardList;

const AnimatedCardList = styled(CardList) `
  opacity: 0;
  animation: ${fadeIn()} 0.4s ease-out forwards;
  animation-delay: 0.5s;
  background: ${(props) => (props.isDraggingOver ? get(props, "theme.palette.primary") : "transparent")};
`;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

class Todos extends Component {

  state = {
    todos: [],
  }

  async componentDidMount() {
    try {
      const { body } = await request
        .get("https://jsonplaceholder.typicode.com/posts")
        .accept("application/json");
      this.setState({ todos: body });
    } catch (error) {
      console.log("something went wrong");
    }
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return;

    const { todos } = this.state;
    const reorderedTodos = reorder(
      todos,
      result.source.index,
      result.destination.index,
    );

    this.setState({ todos: reorderedTodos });
  }

  render() {
    const { className } = this.props;
    const { todos } = this.state;
    return (
      <div className={className}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {
              (provided, snapshot) => (
                <div ref={provided.innerRef}>
                  <AnimatedCardList isDraggingOver={snapshot.isDraggingOver}>
                    {
                      todos.map((todo, idx) =>
                        <Draggable key={todo.id} draggableId={todo.id} index={idx}>
                          {
                            (provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}>
                                <Card
                                  isDragging={snapshot.isDragging}
                                  title={todo.title}>
                                  {todo.body}
                                </Card>
                              </div>)
                          }
                        </Draggable>)
                    }
                    {provided.placeholder}
                  </AnimatedCardList>
                </div>)
            }
          </Droppable>
        </DragDropContext>

      </div>);
  }
}

export default styled(Todos) `
  background: ${(props) => get(props, "theme.blends.todos.accent")};
  color: ${(props) => get(props, "theme.blends.todos.text")};
  min-height: 100%;
  animation: ${(props) =>
    fadeColor(get(props, "theme.blends.todos.accent"), get(props, "theme.blends.todos.primary"))} 1s ease-out forwards;
`;
