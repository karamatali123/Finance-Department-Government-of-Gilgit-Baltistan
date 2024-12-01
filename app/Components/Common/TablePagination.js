const TablePagination = ({ length }) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        className="text-gray-400 py-2 px-4 border rounded-md bg-gray-100"
        disabled
      >
        Previous
      </button>
      <div className="space-x-2">
        {Array.from({ length: 11 }, (_, index) => (
          <button
            key={index}
            className="py-2 px-4 border rounded-md text-gray-600"
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className="text-gray-400 py-2 px-4 border rounded-md bg-gray-100">
        Next
      </button>
    </div>
  );
};

export default TablePagination;

// import React, { useState, useEffect, useRef } from "react";
// import { jsonData } from "./data.js";
// import {
//   Button,
//   Dialog,
//   Grid,
//   LinearProgress,
//   Slide,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import { OrgChart } from "d3-org-chart";
// import { Field, Form, Formik } from "formik";
// import { TextField } from "formik-mui";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import Avatar from "@mui/material/Avatar";
// import GavelIcon from "@mui/icons-material/Gavel";
// import ReactDOMServer from "react-dom/server";
// import { useTheme } from "@mui/material/styles";

// const Obs = (props, ref) => {
//   const d3Container = useRef(null);

//   const [data, setData] = useState(null);
//   const [open, setOpen] = React.useState(false);
//   const [newNode, setNewNode] = useState({});
//   let chart = new OrgChart();

//   useEffect(() => {
//     setData(jsonData);
//     if (data && d3Container.current) {
//       if (!chart) {
//         chart = new OrgChart();
//       }
//       chart
//         .container(d3Container.current)
//         .data(data)
//         .nodeWidth((d) => 225)
//         .nodeHeight((d) => 110)
//         .initialZoom(0.7)
//         .siblingsMargin((d) => 50)
//         .childrenMargin((d) => 75)
//         .neightbourMargin((n1, n2) => 100)
//         .childrenMargin((d) => 60)
//         .compactMarginBetween((d) => 35)
//         .compactMarginPair((d) => 80)
//         .onNodeClick((d, i, arr) => {
//           console.log(d, "Id of clicked node ");
//           setNewNode({ name: "", id: "", parentNodeId: d });

//           setOpen(true);
//           // props.onNodeClick(d);
//         })
//         .nodeContent(function (d, i, arr, state) {
//           return ReactDOMServer.renderToString(Cards(d));
//         })
//         .render();
//     }
//   }, [data, d3Container.current]);

//   const Cards = (d) => {
//     console.log(d);
//     return (
//       <Card sx={{ minHeight: 125, minWidth: 225 }}>
//         <Grid
//           container
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//           spacing={0}
//         >
//           <Grid item>
//             <CardHeader
//               sx={{
//                 maxHeight: 50,
//                 minWidth: 225,
//               }}
//               avatar={
//                 <Avatar sx={{ width: 34, height: 34 }}>
//                   <GavelIcon color="error" />
//                 </Avatar>
//               }
//               title={
//                 <Typography color="#111672" fontWeight="bold">
//                   {" "}
//                   {d.data.name}{" "}
//                 </Typography>
//               }
//             />
//           </Grid>

//           <Grid item xs align="center">
//             <Typography align="center"> Managers: </Typography>
//             <Typography align="center" variant="button">
//               {" "}
//               {d.data._directSubordinates}{" "}
//             </Typography>
//           </Grid>
//           <Grid item xs align="center">
//             <Typography align="center"> Oversees: </Typography>
//             <Typography align="center" variant="button">
//               {" "}
//               {d.data._totalSubordinates}{" "}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Card>
//     );
//   };

//   function addNodeWithData(nodeData) {
//     //this function should get that values from the formik and add them as a new node
//     //but its not working as of now
//     //the error shows on line 492 in d3-org-chart.js
//     const newData = [...data];
//     setData((prv) => [...prv, nodeData]);
//     setOpen(false);
//   }

//   function addNode() {
//     //this is default function that was in the example
//     const node = {
//       name: "New Node",
//       nodeId: "6060",
//       parentNodeId: "6066",
//     };

//     chart.addNode(node);
//   }

//   function deleteNode() {
//     chart.removeNode(6068);
//   }

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Grid container>
//       <Grid item xs={12}>
//         <button id={"addButton"} onClick={addNode}>
//           add node as root's child{" "}
//           {/* the addNode function works only when its called from this button  */}
//         </button>
//         <button onClick={deleteNode}>remove node</button>
//         <div ref={d3Container} />

//         <Dialog
//           fullWidth={true}
//           maxWidth={"sm"}
//           fullScreen={fullScreen}
//           open={open}
//           keepMounted
//           onClose={handleClose}
//           aria-labelledby="alert-dialog-slide-title"
//           aria-describedby="alert-dialog-slide-description"
//         >
//           <Formik
//             enableReinitialize={true}
//             initialValues={{
//               name: "Dav Nan",
//               id: "7946",
//               parentNodeId: "6066",
//             }}
//             onSubmit={(values, { resetForm, setSubmitting }) => {
//               console.log("add button clicked");
//               addNodeWithData(values);
//               resetForm();
//               setSubmitting(false);
//               //even if I call the default addNode function from this button, it still gives an error
//               // document.getElementById("addButton").click();
//             }}
//           >
//             {({ submitForm, isSubmitting }) => (
//               <Form>
//                 <Grid>
//                   <Grid item xs="auto">
//                     <Field
//                       component={TextField}
//                       label="Name"
//                       name="name"
//                       fullWidth
//                     />
//                   </Grid>
//                   <br />

//                   <Grid item xs="auto">
//                     <Field
//                       component={TextField}
//                       label="id"
//                       name="id"
//                       fullWidth
//                     />
//                   </Grid>
//                   <br />

//                   <Grid item xs="auto">
//                     <Field
//                       component={TextField}
//                       label="parentNodeId"
//                       name="parentNodeId"
//                       fullWidth
//                     />
//                   </Grid>
//                   <br />
//                   <Grid item xs="auto">
//                     {isSubmitting && <LinearProgress />}
//                   </Grid>
//                 </Grid>
//                 <Grid>
//                   <Button
//                     variant="contained"
//                     disabled={isSubmitting}
//                     onClick={submitForm}
//                   >
//                     Add new child
//                   </Button>
//                 </Grid>
//               </Form>
//             )}
//           </Formik>
//         </Dialog>
//       </Grid>
//     </Grid>
//   );
// };
