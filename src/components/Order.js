import React from 'react';
import './Order.css';

function Order() {
    return (
        <>            
            <div className="container">
            <div className="section-header">Header Info</div>          
            <div className="row" >  
                <div className="column">
                    <span className="property-header">PO</span>
                    <span>6042223</span>
                </div>
                <div className="column">
                <span className="property-header">OP#</span>
                    <span>4202629</span>
                </div>
                <div className="column">
                <span className="property-header">reated</span>
                    <span>Mar 20 2019</span>
                </div>
                <div className="column">
                <span className="property-header">CSR</span>
                    <span>JonathanE</span>
                </div>
                <div className="column">
                <span className="property-header">Warehouse</span>
                    <span>STL</span>
                </div>
            </div>
           
            <div className="row" >  
                <div className="column">
                    <span className="property-header">Payment Terms</span>
                    <span>N30</span>
                </div>
                <div className="column">
                <span className="property-header">Sales Amount</span>
                    <span>$241.26</span>
                </div>
                <div className="column">
                <span className="property-header">Sales Tax</span>
                    <span>$0.00</span>
                </div>
                <div className="column">
                <span className="property-header">Ship Complete</span>
                    <span>Yes</span>
                </div>
           
            </div>


           
            <div className="section-header">Address Info</div>          
            <div className="row" >  
                <div className="column">
                <span className="property-header">Bill To</span>
                    <span>Taylor Industries/Hussmann Corp.</span>
                    <span>P.O. Box 981374</span>
                    <span>El Paso, TX 799981374</span>
                </div>
                <div className="column">
                <span className="property-header">Ship To</span>
                    <span>Taylor Industries/Hussmann Corp.</span>
                    <span>P.O. Box 981374</span>
                    <span>El Paso, TX 799981374</span>
                </div>
            </div>
             

            <div className="section-header">Shipment Info</div>          
            <div className="row" >  
                <div className="column">
                <span className="property-header">Ship Date</span>
                    <span>3/27/2019 9:11:15 AM</span>                  
                </div>
                <div className="column">
                <span className="property-header">Shipment Number</span>
                    <span>Shipment Number</span>                 
                </div>
                <div className="column">
                <span className="property-header">Ship Total</span>
                    <span>$23.95</span>                 
                </div>
                <div className="column">
                <span className="property-header">Tracking Number</span>
                    <span>1Z6656600359979393</span>                 
                </div>
            </div>

            <div className="section-header">Parts</div>          
            <div className="row" >  
                <div className="column">
                <span className="property-header">Item</span>
                    <span>1</span>                  
                    <span>2</span> 
                </div>
                <div className="column">
                <span className="property-header">Part No</span>
                    <span>D300900</span>                 
                    <span>24PRC-C03</span>  
                </div>
                <div className="column">
                <span className="property-header">Description</span>
                    <span>condenser/ Evaporator motor</span>                 
                    <span>Chr Rev Strap Cam-Lift Hinge 1-1/4" Off</span>  
                </div>
                <div className="column">
                <span className="property-header">Qty Ordered</span>
                    <span>1</span>                 
                    <span>4</span>    
                </div>
                <div className="column">
                <span className="property-header">Qty Shipped</span>
                    <span>1</span>                 
                    <span>4</span>    
                </div>
                <div className="column">
                <span className="property-header">Unit Price</span>
                    <span>$23.94</span>                 
                    <span>$54.33</span>
                </div>
            </div>
             
            </div> 
        </>
    )
}

export default Order;
