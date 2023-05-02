import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='grid grid-cols-2 w-full gap-16'>
            <div>

            </div>
            <img src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=K_VDU6LQQQS0hsYXB8-b4ILTpfY_xFv0AXcwCpCAEqw=" className="w-3/4 my-auto" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className='grid grid-cols-2 w-full'>
            <div>

            </div>
            <img src="https://media.istockphoto.com/id/1079893444/photo/grilled-steaks-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=h1AeikJAhGY0KK7rinCdX_8YzYE8vRzXFwJJAJPw_uQ=" className="w-3/4 my-auto gap-16" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className='grid grid-cols-2 w-full'>
            <div>

            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHV2BSAGI-9GXQZX9YS5jA5p1x3syA126xi4FJbvFl8TxxetPIwivyMOdp4IJQfG1e6fA&usqp=CAU" className="w-3/4 my-auto gap-16" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className='grid grid-cols-2 w-full gap-16'>
            <div>

            </div>
            <img src="https://t3.ftcdn.net/jpg/01/66/96/58/360_F_166965892_GwEbcHXeFFIQdq7ro1akSpWm6XQwefgl.jpg" className="w-3/4 my-auto gap-16" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;