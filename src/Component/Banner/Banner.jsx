import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full shadow-xl mb-6">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-16'>
            <div className='p-8 md:ms-16 my-auto'>
              <h1 className='text-4xl font-medium'>Spaghetti Carbonara</h1>
              <p className='text-gray-500 mt-6'>Cook spaghetti in salted water until al dente. Cook pancetta until crispy. Whisk egg yolks, grated cheese, and black pepper. Reserve 1 cup of pasta water. Drain spaghetti and add to pancetta. Add egg mixture and pasta water. Toss to combine. Serve hot.</p>
            </div>
            <img src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=K_VDU6LQQQS0hsYXB8-b4ILTpfY_xFv0AXcwCpCAEqw=" className="w-3/4 my-auto" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <div className='p-8 md:ms-16 my-auto'>
              <h1 className='text-4xl font-medium'>Margherita Pizza</h1>
              <p className='text-gray-500 mt-6'>Preheat oven to 500°F. Stretch pizza dough and place on a baking sheet. Spread tomato sauce over dough. Slice mozzarella and place on top. Bake for 8-10 minutes until crust is crispy and cheese is melted. Garnish with fresh basil leaves.</p>
            </div>
            <img src="https://media.istockphoto.com/id/1079893444/photo/grilled-steaks-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=h1AeikJAhGY0KK7rinCdX_8YzYE8vRzXFwJJAJPw_uQ=" className="w-3/4 my-auto gap-16" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <div className='p-8 md:ms-16 my-auto'>
              <h1 className='text-4xl font-medium'>Chicken Parmesan</h1>
              <p className='text-gray-500 mt-6'>Preheat oven to 375°F. Mix breadcrumbs and grated cheese. Beat eggs in a separate bowl. Dip chicken breasts in egg and then in breadcrumb mixture. Place chicken in a baking dish. Spoon tomato sauce over chicken. Top with sliced mozzarella. Bake for 25-30 minutes until chicken is cooked through and cheese is melted and bubbly.</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHV2BSAGI-9GXQZX9YS5jA5p1x3syA126xi4FJbvFl8TxxetPIwivyMOdp4IJQfG1e6fA&usqp=CAU" className="w-3/4 my-auto gap-16" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-16'>
            <div className='p-8 md:ms-16 my-auto'>
              <h1 className='text-4xl font-medium'>Pesto Pasta</h1>
              <p className='text-gray-500 mt-6'>Cook pasta in salted water until al dente. In a food processor, pulse basil, Parmesan cheese, pine nuts, and garlic until finely chopped. Slowly add olive oil while pulsing. Drain pasta and reserve 1 cup of pasta water. Add pesto sauce to pasta and toss to combine. If the sauce is too thick, add some pasta water to thin it out. Serve hot or cold.</p>
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