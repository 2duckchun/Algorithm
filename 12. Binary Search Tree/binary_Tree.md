# Binary Tree
## Objectives
- Define what a tree is (트리가 무엇인지 정의)
- Compare and contrast trees and lists (트리와 리스트를 비교해보기)
- Explain the differences between trees, binary trees, and binary search trees (트리와 이진트리, 이진검색트리 비교하기)
- Implement operations on binary search trees(BST) (이진검색트리 구현하기)

## What is a tree?
- A data structure that consists of nodes in a parent / child relationship(트리는 부모-자식 노드에 관한 자료구조를 의미한다.)
- 오로지 노드는 부모-자식 관계에 따라 자식인 노드만을 가리킬 수 있음. (자식이 부모를 가르켜선 안됨)
- 모든 노드가 루트에서 멀어지는 방식으로 연결됨.

## 리스트와 트리의 차이점
- 리스트는 선형, 트리는 비선형 (리스트는 쭉쭉 가고, 트리는.. 삶의 갈림길에서 선택을 내린다.)

## TREE TERMINOLOGY
- Root(루트) : 트리 노드의 최상단
- Child(자식) : 노드에서 다른 노드로 연결이 된 노드이나, 루트에서 멀어지는 방향으로 연결된 노드
- Parent(부모) : 노드에서 다른 노드로 연결이 된 노드이나, 루트에서 조금 더 가깝게 연결되어있는 노드
- Siblings(형제) : 같은 부모 노드를 가지는 노드 그룹
- leaf(리프) : 자식 노드가 없는 노드
- Edge(간선) - 노드와 다른 노드를 잇는 커넥션