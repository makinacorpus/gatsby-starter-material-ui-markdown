import React from 'react';
import useBlocks from '../hooks/useBlocks';

const MDBlock = ({ block, ...props }) => {
  const { [block]: selectedBlock } = useBlocks();

  if (!selectedBlock) {
    return (
      <div {...props}>
        <span>No such block: <tt>src/md-blocks/{block}</tt></span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: selectedBlock.html }} {...props} />
  );
};

export default MDBlock;
