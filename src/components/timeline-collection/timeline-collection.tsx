import React from "react";
// import TimelineItem from "../timeline-item/timeline-item";
import { TimelineCollectionModel } from "../../models/TimelineCollnModel";
import {
  TimelineCollectionWrapper,
  TimelineItemWrapper,
} from "./timeline-collection.styles";
import TimelineItem from "../timeline-elements/timeline-card/timeline-card";

const TimelineCollection: React.FunctionComponent<TimelineCollectionModel> = ({
  items,
  itemWidth,
  handleItemClick,
  autoScroll,
  mode,
  wrapperId,
  theme,
  slideShowRunning,
  cardHeight
}) => {
  return (
    <TimelineCollectionWrapper
      className={mode.toLowerCase()}
      data-testid="timeline-collection"
    >
      {items.map((item) => (
        <TimelineItemWrapper
          key={item.id}
          width={itemWidth}
          className={`${mode.toLowerCase()} ${item.visible ? "visible" : ""}`}
        >
          <TimelineItem
            {...item}
            onClick={handleItemClick}
            autoScroll={autoScroll}
            mode={mode}
            wrapperId={wrapperId}
            theme={theme}
            slideShowRunning={slideShowRunning}
            cardHeight={cardHeight}
          />
        </TimelineItemWrapper>
      ))}
    </TimelineCollectionWrapper>
  );
};

export default TimelineCollection;
