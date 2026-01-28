import { GraphNode } from "@langchain/langgraph";
import { chatModel } from "../chat-model";
import { readFile } from "../tools/read-file";
import { CodePilotAgentState } from "../state";


const plannerModel = chatModel.bindTools([
    readFile
])

export const plannerNode: GraphNode<typeof CodePilotAgentState> = async (state) => {
  console.log("Planner node called");
  console.log(state.messages);
  const response = await plannerModel.invoke([
    ...state.messages,
  ]);
  return {
    messages: [response]
  };
};