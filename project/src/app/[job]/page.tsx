"use client";

import { useParams } from 'next/navigation';

const Page = () => {
  const { job } = useParams(); // URL에서 id 가져오기

  return (
    <div>
      <h1>JOB : {job}</h1>
      {/* 추가적인 포스트 내용 표시 */}
    </div>
  );
};

export default Page;