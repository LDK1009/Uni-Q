import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
          <h1>로그인 성공</h1>  
          <Link href={'/'}>홈으로 가기</Link>
        </div>
    );
};

export default page;