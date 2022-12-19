import React, { useState, useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      searchProperties:
			{
				search: "",
				genres: "",
				parent_platform: "",
        tags: ""
			},
      res: []
    },
    actions: {

      datafetcher: () => {
				let query = ''
        let store = getStore()
        console.log("Datafetcher Function called")
				for (const property in store.searchProperties) {
          console.log('Property is ' + property + ' value is ' +store.searchProperties[property])
					if (store.searchProperties[property] != '') {
						query = query + '&' + property + '=' + store.searchProperties[property]
					}
					// console.log(`${property}: ${object[property]}`);
				}
				console.log(query)
				fetch(
					`https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547` + query
				)
					.then((res) => res.json())
					.then((data) => {
						// {
						// 	data ? setSearchResults(data.results) : "loading";
						// }
						//console.log(data);
						console.log(data.results);

						const store = getStore();

						//we have to loop the entire demo array to look for the respective index
						//and change its color
						const res = data.results

						//reset the global store
						setStore({ res: res });
						

					})
					.catch((error) => console.error("Error:", error));
			},

      searchPropertiesChanger: (prop, value) => {
        const store = getStore()
        console.log('searchPropertiesChanger function called. ' + 'Prop is ' + prop +' VALUE OF SEARCH: ' + value)
        store.searchProperties[prop] = value;
        setStore({store: store})

        // value = "&" + value
      //   fetch(
      //     `https://api.rawg.io/api/games?key=bfe242c109884e06860a295ba9f3a547${value}`
      //   )
      //     .then(
      //       (response) => response.json()
      //       // converts json into js
      //     )
      //     .then((responseData) => {
      //       // setResult(responseData.results);
      //       setStore({ results: responseData.results });
      //       // console.log(responseData.results);
      //       // console.log(store.results)
      //     })
          
      //     .catch((error) => {
      //       // just incase there's an error
            
      //       console.log(error);
      //     });
      // },
      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
       },
    },
  };
};

export default getState;
