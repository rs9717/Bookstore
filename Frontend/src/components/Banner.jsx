import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
	return (
		<>
			<div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
				<div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
					<div className="space-y-8">
						<h1 className="text-2xl md:text-4xl font-bold">
							Welcome to our store{" "}
							<span className="text-green-500">explore new everyday!!!</span>
						</h1>
						<p className="text-sm md:text-xl">
							A bookstore is a haven for book enthusiasts, offering a curated
							collection of literature, from classic novels to contemporary
							bestsellers. It's more than a retail space; it's a vibrant
							community hub where readers can explore diverse genres, attend
							author events, and engage in literary discussions. The inviting
							atmosphere, with shelves brimming with stories and the scent of
							fresh pages, makes it a cherished escape from the digital world.
							Whether an independent gem or a well-known chain, bookstores
							foster a love for reading and provide a welcoming space for
							discovery and connection.
						</p>
					</div>
				</div>
				<div className=" order-1 w-full mt-20 md:w-1/2">
					<img
						src="https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						className="md:w-[550px] md:h-[460px] md:ml-12"
						alt=""
					/>
				</div>
			</div>
		</>
	);
}

export default Banner;
