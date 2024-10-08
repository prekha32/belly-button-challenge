# belly-button-challenge

# Belly Button Biodiversity Dashboard file Structure

├── index.html           # Main HTML file for the dashboard
├── static/
│   └── js/
│       └── app.js       # JavaScript file for data handling and Plotly charting
├── samples.json         # Dataset of bacterial cultures (provided in the challenge)
├── README.md   


## Overview

This project is an interactive web-based dashboard that visualizes the microbial species (Operational Taxonomic Units, or OTUs) found in human belly buttons. The dashboard allows users to explore the bacterial diversity of different individuals by selecting from a list of sample IDs. The visualizations include a bar chart for the top 10 OTUs, a bubble chart for the full OTU profile, and a demographic information panel.

The dashboard is built using **D3.js** to load and manipulate data, and **Plotly.js** for generating interactive visualizations. The project reads data from an external JSON file and updates all charts and demographic information dynamically based on user input.

## Features

- **Interactive Bar Chart**: Displays the top 10 OTUs found in each individual.
- **Bubble Chart**: Visualizes all OTUs found in a sample.
- **Metadata Panel**: Displays demographic information of the selected sample.
- **Dynamic Updates**: All visualizations update automatically when a new sample is selected.

## Instructions

Complete the following steps to build the dashboard:

### 1. Load Data Using D3

Use the **D3.js** library to read in the `samples.json` file from the following URL:
```javascript
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => { 
    // Your code here 
});
```

### 2. Horizontal Bar Chart

- Create a **horizontal bar chart** to display the **top 10 OTUs** found in the selected sample.
- Use `sample_values` as the values for the bar chart.
- Use `otu_ids` as the labels for the bar chart.
- Use `otu_labels` as the hovertext for the chart.

### 3. Bubble Chart

- Create a **bubble chart** that visualizes all OTUs for a given sample.
- Use `otu_ids` for the x-values.
- Use `sample_values` for the y-values.
- Use `sample_values` for the marker size.
- Use `otu_ids` for the marker colors.
- Use `otu_labels` for the text values.

### 4. Metadata Display

- Display the sample's metadata (demographic information).
- Loop through each key-value pair from the metadata JSON object and create a text string.
- Append an HTML tag with that text to the `#sample-metadata` panel.

### 5. Dynamic Updates

- Update all the plots when a new sample is selected. You can create any layout you prefer for your dashboard.

## Technologies Used

- **HTML/CSS**: For structuring and styling the dashboard.
- **JavaScript**: For implementing the D3.js and Plotly.js logic.
- **D3.js**: For data manipulation and loading JSON data.
- **Plotly.js**: For rendering interactive charts.
