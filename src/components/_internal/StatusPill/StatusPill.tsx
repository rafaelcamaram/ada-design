import React from "react";

import Flex from "components/Flex";
import { Impact } from "types/global";
import { getColorByImpact } from "utils/styles";

type Props = {
  impact: Impact;
};

const StatusPill: React.FC<Props> = ({ impact }) => {
  return (
    <Flex
      width={10}
      height={10}
      borderRadius={5}
      backgroundColor={getColorByImpact(impact)}
    />
  );
};

export default StatusPill;
