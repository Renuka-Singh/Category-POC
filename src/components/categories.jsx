import React, { Component } from 'react';
import Category from "/.category";

class Categories extends Component {
    state = { 
        baseCategories : [
            {"id":19,"name":"Industrial Plants \u0026 Machinery","description":{},"visibility":true,"priority_order":null,"created_at":"2019-04-03T12:34:46.852+05:30","updated_at":"2019-04-03T12:34:56.602+05:30","created_by":"rakesh@bizongo.com","updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/52509/thumb_64_Soda_Machines.JPG"},
            {"id":18,"name":"Display","description":{},"visibility":true,"priority_order":null,"created_at":"2019-03-13T13:32:31.005+05:30","updated_at":"2019-03-13T14:03:04.894+05:30","created_by":"rakesh@bizongo.com","updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/52239/thumb_64_ACP_Board.JPG"},
            {"id":17,"name":"Raw Material","description":{},"visibility":true,"priority_order":null,"created_at":"2019-02-23T17:18:36.322+05:30","updated_at":"2019-02-23T17:25:00.736+05:30","created_by":"rakesh@bizongo.com","updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/52063/thumb_64_raw-material-for-paper-.jpg"},
            {"id":16,"name":"Job Work","description":{"body":"Job Work"},"visibility":true,"priority_order":null,"created_at":"2019-01-30T18:34:46.638+05:30","updated_at":"2019-01-30T19:02:47.700+05:30","created_by":"rakesh@bizongo.com","updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/51829/thumb_64_Capture.JPG"},
            {"id":15,"name":"Marketing Material","description":{},"visibility":true,"priority_order":null,"created_at":"2018-12-26T16:56:57.877+05:30","updated_at":"2018-12-26T17:05:56.984+05:30","created_by":"rakesh@bizongo.com","updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/51533/thumb_64_Banner.jpg"},
            {"id":14,"name":"Services","description":{},"visibility":true,"priority_order":null,"created_at":"2018-09-19T13:11:14.782+05:30","updated_at":"2019-04-30T17:52:17.300+05:30","created_by":"abhay@bizongo.com","updated_by":"suraj@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/50958/thumb_64_download__1_.jpg"},
            {"id":13,"name":"Cosmetic Packaging","description":{"body":""},"visibility":true,"priority_order":null,"created_at":"2018-05-30T11:45:32.807+05:30","updated_at":"2018-05-31T12:30:47.314+05:30","created_by":"rakesh@bizongo.com","updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/50003/thumb_64_Cosmetic-packaging-design-trends.jpg"},
            {"id":12,"name":"Bottles And Jars","description":{"body":"Bottles And Jars"},"visibility":true,"priority_order":0,"created_at":"2017-11-09T19:55:45.355+05:30","updated_at":"2019-04-16T12:05:12.972+05:30","created_by":null,"updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/52607/thumb_64_Bottles_And_Jars.png"},
            {"id":11,"name":"Office Supplies","description":{},"visibility":true,"priority_order":0,"created_at":"2017-11-09T19:55:45.278+05:30","updated_at":"2018-03-08T12:39:50.809+05:30","created_by":null,"updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/48356/thumb_64_unnamed.png"},
            {"id":10,"name":"Food Packaging","description":{},"visibility":true,"priority_order":0,"created_at":"2017-11-09T19:55:45.026+05:30","updated_at":"2017-11-09T19:55:45.026+05:30","created_by":null,"updated_by":null,"image_url":null},
            {"id":9,"name":"Pouches And Films","description":{},"visibility":true,"priority_order":2,"created_at":"2017-11-09T19:55:44.628+05:30","updated_at":"2017-11-09T19:55:44.628+05:30","created_by":null,"updated_by":null,"image_url":null},
            {"id":8,"name":"Packaging Bags","description":{},"visibility":true,"priority_order":4,"created_at":"2017-11-09T19:55:44.590+05:30","updated_at":"2017-11-09T19:55:44.590+05:30","created_by":null,"updated_by":null,"image_url":null},
            {"id":7,"name":"Polymers","description":{},"visibility":false,"priority_order":6,"created_at":"2017-11-09T19:55:44.487+05:30","updated_at":"2017-11-25T19:57:13.354+05:30","created_by":null,"updated_by":null,"image_url":null},
            {"id":6,"name":"Packing And Shipping","description":{"body":"\u003cp\u003eNo one likes gifts or shoes or clothes or jewelry or letters without the boxes they come in.  Come on, presentation scores almost as much as what inside and this is why choosing the right box comes handy! Not only that, some boxes require transportation and delicate care, along with protective bubble wrap (which you can explode later), they also require labels for designation, identification and important information. \u003c/p\u003e\n\u003cp\u003eWhew, that’s a lot of requirements, right?\u003c/p\u003e\n\u003cp\u003eWell, surprise surprise, Bizongo has all of it and more. \u003c/p\u003e\n\u003cp\u003eCorrugated boxes, shoe boxes, gift boxes, garment boxes, jewelry boxes, white top boxes are the range of boxes that Bizongo offers. These cater to a variety of requirements that many industries may require not only in terms of transportation but also in the areas of storage and preservation. Correct corrugation and durability are important factors which can only be gained when the purchase is made from top quality suppliers and that, my friend, is exactly what Bizongo offers. With a wide range of  verified suppliers dealing in the following commodities, you can be safely reassured about both quality and price. \u003c/p\u003e\n\u003cp\u003eAdhesive tapes, courier bags, envelopes and bubble wraps are important side-ons when boxes come into play. Bizongo also supplies these products with a wide range of brands and customization options so that what you finally decide to purchase is nothing short of your satisfaction.\u003c/p\u003e\n\u003cp\u003eBizongo gives you the added benefit of lucrative discounts, door step delivery facility in sixteen cities, sample testing of products, bulk purchase and the promise of a transaction that is top notch in professionalism. \u003c/p\u003e\n\u003cp\u003eSo before you pack, make sure you’ve Bizongo-ed it!\u003c/p\u003e"},"visibility":true,"priority_order":1,"created_at":"2017-11-09T19:55:44.447+05:30","updated_at":"2019-04-16T12:16:20.034+05:30","created_by":null,"updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/52610/thumb_64_Packing_And_Shipping.jpg"},
            {"id":5,"name":"Chemicals","description":{},"visibility":true,"priority_order":8,"created_at":"2017-11-09T19:55:44.410+05:30","updated_at":"2019-04-26T17:01:53.922+05:30","created_by":null,"updated_by":"suraj@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/52767/thumb_64_download.jpg"},
            {"id":4,"name":"Plastics","description":{},"visibility":true,"priority_order":7,"created_at":"2017-11-09T19:55:44.331+05:30","updated_at":"2019-05-09T12:12:15.926+05:30","created_by":null,"updated_by":"suraj@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/52992/thumb_64_pile.png"},
            {"id":3,"name":"Paints \u0026 Pigments","description":{},"visibility":true,"priority_order":10,"created_at":"2017-11-09T19:55:44.277+05:30","updated_at":"2018-12-17T11:06:51.845+05:30","created_by":null,"updated_by":"abhay@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/51475/thumb_64_s-l300.jpg"},
            {"id":2,"name":"Home \u0026 Living","description":{},"visibility":true,"priority_order":9,"created_at":"2017-11-09T19:55:44.199+05:30","updated_at":"2019-06-27T11:57:45.713+05:30","created_by":null,"updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/53789/thumb_64_bigstock-cleaning-products-isolated-on-32421611.jpg"},
            {"id":1,"name":"Material Handling","description":{},"visibility":true,"priority_order":null,"created_at":"2017-11-09T15:45:57.104+05:30","updated_at":"2019-04-16T11:59:25.348+05:30","created_by":null,"updated_by":"rakesh@bizongo.com","image_url":"https://d1wg0fvppk5fit.cloudfront.net/uploads/picture/image/37741/thumb_64_Material_Handling.jpg"}
        ]
     };


    render() { 
        return(
            <div>
                {this.state.baseCategories.map( category => 
                <Category key={category.id}  category = {category} /> )}
            </div>  
        );       
}
}

 
export default Categories;

