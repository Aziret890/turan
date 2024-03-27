import React from "react";
import starNone from "../../shared/svg/star/starNone.svg";
import starBlock from "../../shared/svg/star/starBlock.svg";
interface IProps {
  count: number | string;
}
function Star({ count }: IProps) {
  const data: object[] = [
    {
      rating: 1,
      res: (
        <>
          {
            <div className="flex gap-[4px]">
              <img src={starBlock} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
            </div>
          }
        </>
      ),
    },
    {
      rating: 2,
      res: (
        <>
          {
            <div className="flex gap-[4px]">
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
            </div>
          }
        </>
      ),
    },
    {
      rating: 3,
      res: (
        <>
          {
            <div className="flex gap-[4px]">
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
            </div>
          }
        </>
      ),
    },
    {
      rating: 4,
      res: (
        <>
          {
            <div className="flex gap-[4px]">
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starNone} alt="" />
            </div>
          }
        </>
      ),
    },
    {
      rating: 5,
      res: (
        <div>
          {
            <div className="flex gap-[4px]">
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
              <img src={starBlock} alt="" />
            </div>
          }
        </div>
      ),
    },
    {
      rating: 0,
      res: (
        <div>
          {
            <div className="flex gap-[4px]">
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
              <img src={starNone} alt="" />
            </div>
          }
        </div>
      ),
    },
  ];
  let resData: [] = data.filter((el) => el.rating == count);
  return (
    <div className="">
      {resData.map((el, inx) => (
        <React.Fragment key={inx}>{el.res}</React.Fragment>
      ))}
    </div>
  );
}

export default Star;
