import { MarkerType } from "@vue-flow/core";
import data from "../packages/getVoteData/data/resultFinal.json";

const generateElements = (data) => {
  const nodes = [];
  const edges = [];

  // 由外部useLayout.js控制布局(所以这里的配置其实没啥用)
  const CHAPTER_HORIZONTAL_SPACING = 3000;
  const CHAPTER_VERTICAL_POSITION = 300;
  const VOTE_VERTICAL_START = 600;
  const VOTE_VERTICAL_SPACING = 800;

  data.forEach((item, index) => {
    const nodeId = String(index + 1);
    nodes.push({
      id: nodeId,
      type: "CustomNode",
      data: {
        label: `${item.Chapter} @${item.Author}`,
        link: item.Link,
      },
      position: {
        x: CHAPTER_HORIZONTAL_SPACING * index,
        y: CHAPTER_VERTICAL_POSITION,
      },
      class: "light",
    });

    // Find the option with the highest percentage
    let highestPercentageVote = null;
    let highestPercentageVoteIndex = -1;
    let highestPercentage = -1;

    item.VoteList.forEach((vote, voteIndex) => {
      const voteNodeId = `${nodeId}-${voteIndex + 1}`;

      // Position votes in a vertical column below the chapter
      nodes.push({
        id: voteNodeId,
        data: { label: vote.content || vote.title },
        position: {
          x: CHAPTER_HORIZONTAL_SPACING * index,
          y: VOTE_VERTICAL_START + VOTE_VERTICAL_SPACING * voteIndex,
        },
        class: "light",
      });

      let percentage = parseFloat(vote.part_ratio);

      const formattedPercentage =
        percentage < 1 ? (percentage * 100).toFixed(2) : percentage.toFixed(2);

      edges.push({
        id: `e${nodeId}-${voteNodeId}`,
        source: nodeId,
        target: voteNodeId,
        label: `${formattedPercentage}%`,
        markerEnd: MarkerType.ArrowClosed,
        type: "smoothstep",
        style: { strokeWidth: 2 },
      });

      const actualPercentage = percentage < 1 ? percentage * 100 : percentage;
      if (actualPercentage > highestPercentage) {
        highestPercentage = actualPercentage;
        highestPercentageVote = vote;
        highestPercentageVoteIndex = voteIndex;
      }
    });

    // Connect the highest percentage option to the next chapter if available
    if (index < data.length - 1 && highestPercentageVoteIndex !== -1) {
      const nextChapterNodeId = String(index + 2);
      const highestPercentageVoteNodeId = `${nodeId}-${
        highestPercentageVoteIndex + 1
      }`;

      // Set the background color of the highest vote node to green
      const highestVoteNode = nodes.find(
        (node) => node.id === highestPercentageVoteNodeId
      );
      if (highestVoteNode) {
        highestVoteNode.class = "light highest-vote";
      }

      edges.push({
        id: `e${highestPercentageVoteNodeId}-${nextChapterNodeId}`,
        source: highestPercentageVoteNodeId,
        target: nextChapterNodeId,
        style: { strokeWidth: 3 },
        animated: true,
        type: "smoothstep",
        markerEnd: MarkerType.ArrowClosed,
      });
    }
  });

  return { nodes, edges };
};

const { nodes: generatedNodes, edges: generatedEdges } = generateElements(data);

export const initialNodes = generatedNodes;
export const initialEdges = generatedEdges;
