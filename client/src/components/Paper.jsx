import React from "react";

const Paper = ({ code, year }) => {
  return (
    <ul className="paperlist">
      <li>
        <a
          href={`/data/past_papers//${code}/${code}_m${year}_qp_11.pdf`}
          target="_blank"
        >{`${code}_m${year}_11.pdf`}</a>
      </li>
      <li>
        <a
          href={`/data/past_papers//${code}/${code}_m${year}_qp_12.pdf`}
          target="_blank"
        >{`${code}_m${year}_12.pdf`}</a>
      </li>
      <li>
        <a
          href={`/data/past_papers//${code}/${code}_m${year}_qp_13.pdf`}
          target="_blank"
        >{`${code}_m${year}_13.pdf`}</a>
      </li>
      <li>
        <a
          href={`/data/past_papers//${code}/${code}_m${year}_qp_14.pdf`}
          target="_blank"
        >{`${code}_m${year}_14.pdf`}</a>
      </li>
    </ul>
  );
};

export default Paper;
