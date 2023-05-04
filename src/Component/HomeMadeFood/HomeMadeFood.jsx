import React from 'react';

const HomeMadeFood = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className='w-3/4' src="https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA=" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Chiles Rellenos</h2>
                            <p>Preheat oven to 375 degrees F. Roast poblano peppers over an open flame until skin is charred.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className='w-3/4' src="https://media.istockphoto.com/id/1056419208/photo/grilled-chicken-breast-and-vegetables.jpg?s=612x612&w=0&k=20&c=_seZ-9HcA9Pty-OGkNsUh9dFiGhIPhCXBTKTkmFIFi8%3D&fbclid=IwAR3p6uVj-3DSJoog7JgNs58vxZCeun1q8ayxgDABjtkPp9w_uqToVMzt7kY" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Korean Fried Chicken</h2>
                            <p>Preheat ovento 400 degrees F. In a large bowl, mix together cornstarch, flour, salt, and black pepper.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className='w-3/4' src="https://media.istockphoto.com/id/635675852/photo/pizza-on-white-background.jpg?s=612x612&w=0&k=20&c=3z6N8hYH4yNRK8EbGJ4Pt7vszNw7dL_l8QwnNUz2Z_o%3D&fbclid=IwAR1hEAW09AWCuUYbYjmhspstM-M2p8No7Q-anCuy2RwIF8DA_fSwJI2Tjgs" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bibimbap</h2>
                            <p>Thinly slice beef sirloin and marinate in a mixture of soy sauce, and garlic for at least 30 minutes.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className='w-3/4' src="https://media.istockphoto.com/id/1174567728/photo/ketogenic-diet-keto-brunch-boiled-egg-pork-steak-and-olives-cucumber-spinach-brie-cheese-nuts.jpg?s=612x612&w=0&k=20&c=f59X5n1LpERJm9y1QD4w4D2OagWs7K2IZC2j6ZVyKVQ=" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Salsa Verde</h2>
                            <p>Remove the husks from tomatillos and rinse under cold water. Cut tomatillos in</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default HomeMadeFood;