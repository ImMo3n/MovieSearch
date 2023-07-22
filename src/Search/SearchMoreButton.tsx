import { useCallback, useRef } from "react";
import { styled } from "styled-components";
import { QueryResultPagesType } from "../Types";

export const SearchMoreButton = ({
  useQueryResult,
}: {
  useQueryResult: QueryResultPagesType;
}) => {
  const { isFetchingNextPage, hasNextPage, fetchNextPage } = useQueryResult;

  const observer = useRef<IntersectionObserver>();
  const loadMoreButtonRef = useCallback(
    (node: HTMLButtonElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchNextPage]
  );

  return hasNextPage ? (
    <Button
      ref={loadMoreButtonRef}
      onClick={() => {
        fetchNextPage();
      }}
      disabled={isFetchingNextPage}
    >
      {isFetchingNextPage ? (
        <>
          <div className="loading-circle"></div>
          <span>Loading...</span>
        </>
      ) : (
        <>Load More</>
      )}
    </Button>
  ) : (
    <></>
  );
};

const Button = styled.button`
  background-color: #323232;
  margin-block: 2rem;
  padding-block: 1rem;
  text-align: center;
  border-radius: 10px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
