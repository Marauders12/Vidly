import React from 'react';
import "../styles/MenuComponent.css";
import MenuItem from "./MenuItem";

const MenuComponent = (props) =>{
    let dishesTypes = new Map();
    let types = [];
    props.dishes.dishes.forEach((dish) => {
        if(dishesTypes.has(dish.category)){
            const dishes = dishesTypes.get(dish.category);
            dishes.push(dish);
            dishesTypes.set(dish.category, dishes);
        } else{
            const dishes = [];
            types.push(dish.category);
            dishes.push(dish);
            dishesTypes.set(dish.category, dishes);
        }
    });
    return (
        <div className="menu-body content">
                <div className="container">
                    <div className="row center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <div className="page-section">
                                <h1 className="page-title">Food Menu</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row center">
                        {
                            types.map((type) => {
                                const dishes = dishesTypes.get(type);
                                return <div>
                                    <div className="menu-block">
                                        <h3 className="menu-title">{type.toString().toUpperCase()}</h3>
                                        {
                                            dishes.map((dish) => {
                                                return <MenuItem {...dish}/>
                                            }
                                        )}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="row center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <div className="page-section">
                                <h1 className="page-title">Food Menu</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row center">
                        {
                            types.map((type) => {
                                const dishes = dishesTypes.get(type);
                                return <div>
                                    <div className="menu-block">
                                        <h3 className="menu-title">{type.toString().toUpperCase()}</h3>
                                        {
                                            dishes.map((dish) => {
                                                return <MenuItem {...dish}/>
                                            }
                                        )}
                                    </div>
                                </div>
                            })
                        }
                    </div>
 <div className="row center">
                        {
                            types.map((type) => {
                                const dishes = dishesTypes.get(type);
                                return <div>
                                    <div className="menu-block">
                                        <h3 className="menu-title">{type.toString().toUpperCase()}</h3>
                                        {
                                            dishes.map((dish) => {
                                                return <MenuItem {...dish}/>
                                            }
                                        )}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
        </div>
    );
}

export default MenuComponent;
