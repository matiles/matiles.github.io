var camera = [
   0,1,2,                     // x,y,z coordinates
   4,4,4,                     // Direction normal vector                                                                             
   45                         // field of view : example 45                                                                          
];

var lights = [
   1,                         // number of lights
   60,200,0, 1,1,1,        // light 2, x,y,z location, and rgb colour (white)
];

var objects = [
   1,                                                                            // number of objects                               
   ObjTyp.SPHERE,      13, 0.11,0.61,1.0,0.0,0.7,0.1,1.0, 200,150,150,60            // typ,recsz,r,g,b,spec,lamb,amb,opac, x,y,z,rad,            
];
