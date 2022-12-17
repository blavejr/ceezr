import React from "react";
import { getImageUrl } from '../../utils/index'

export default function Loader({ isLoading }) {
  return (
    <>
      {isLoading && (
        <div className="loader">
          <div>
            <img src={`https://ceezr.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9e6897cf-e38c-4e85-99b2-ff40bdc1dd66%2Fcharizard-logo-DB13CC1850-seeklogo.com.png?table=block&id=74ffd217-e961-4929-b578-313b5c8abf90&spaceId=b70cb859-e906-45a7-a465-570651ecbf85&width=250&userId=&cache=v2`}></img>
          </div>
        </div>
      )}
    </>
  );
}
