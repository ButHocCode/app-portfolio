import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Là một người theo hướng phát triển web, tôi muốn được trãi nghiệm và tự tay tạo ra những trang web
        có ích và tốt cho cộng đồng lẫn cá nhân,tôi muốn được học hỏi và biết nhiều công nghệ hơn<nav></nav>
        </p>

        <br />

        <p className="text-xl">
         Hiện tại tôi đang theo vị trí Front-End sử dụng các công nghệ chủ yếu như Html,Css,Javascrip kèm React và TailWind,
         việc tạo ra các giao diện đẹp, thuận mắt và có tối ưu cho người dùng nhất là đính đến hiện tại của tôi
         ,tôi có sở thích tìm tòi và ham học hỏi, thích những thứ mới lạ và có khả năng thích ứng nhanh 
        </p>
      </div>
    </div>
  );
};

export default About;