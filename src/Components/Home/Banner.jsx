const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-full h-[90vh]"
        />
        <div className="absolute text-white    transform -translate-y-1/2 left-5 right-5 bottom-1/4 w-8/12">
          <h1 className="text-6xl ">
            Lorem ipsum, dolor sit amet consectetur .
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            possimus at quam?
          </p>
          <div>
            <button className="btn btn-active btn-secondary">Button</button>
            <button className="btn btn-outline btn-accent">Button</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1/4">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="w-full h-[90vh]"
        />
        <div className="absolute text-white    transform -translate-y-1/2 left-5 right-5 bottom-1/4 w-8/12">
          <h1 className="text-6xl ">
            Lorem ipsum, dolor sit amet consectetur .
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            possimus at quam?
          </p>
          <div>
            <button className="btn btn-active btn-secondary">Button</button>
            <button className="btn btn-outline btn-accent">Button</button>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1/4">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
