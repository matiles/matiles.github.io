// var camera = [
//    0,1,2,                     // x,y,z coordinates
//    4,4,4,                     // Direction normal vector                                                                             
//    45                         // field of view : example 45                                                                          
// ];

var camera = [
   0,0,0,                     // x,y,z coordinates
   1,0,0,                     // Direction normal vector                                                                             
   45                         // field of view : example 45                                                                          
];

// var lights = [
//    2,                         // number of lights
//    200,200,200, 0,1,0,        // light 1, x,y,z location, and rgb colour (green)
//    150,150,150, 1,1,1,        // light 2, x,y,z location, and rgb colour (white)
// ];

// var lights = [
//    1,                         // number of lights
//    -30,-10,20, 1,1,1,        // light 2, x,y,z location, and rgb colour (white)
// ];

var lights = [
   1,                         // number of lights
   260,40,0, 1,1,1        // light 2, x,y,z location, and rgb colour (white)
   // 260,40,200, 1,1,1,        // light 2, x,y,z location, and rgb colour (white)
];

var objects = [
   3,                                                                            // number of objects                               
   ObjTyp.SPHERE,      13, 0.0,0.0,0.9,0.6,0.7,0.1,1.0, 400,30,10,30,           // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,           
   ObjTyp.SPHERE,      13, 0.9,0.0,0.0,0.9,0.7,0.1,1.0, 400,0,50,40,           // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,           
   ObjTyp.SPHERE,      13, 0.0,0.0,0.8,0.6,0.7,0.1,1.0, 400,30,90,30           // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,           
   // ObjTyp.SPHERE,      13, 1.0,0.0,0.0,0.2,0.7,0.1,1.0, 200,150,200,40,           // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,           
   // ObjTyp.SPHERE,      13, 0.0,0.0,1.0,0.2,0.7,0.1,1.0, 200,150,150,20            // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,            
];
