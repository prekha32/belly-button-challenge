// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const filteredMetadata = metadata.filter(sampleObj => sampleObj.id == sample);
    console.log(`filteredMetadata ${filteredMetadata[0].id}`)
    const sampleMetadata = filteredMetadata[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    const PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
   
    Object.entries(sampleMetadata).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samples = data.samples;

    // Filter the samples for the object with the desired sample number
    const filteredSample = samples.filter(sampleObj => sampleObj.id == sample);

    // Get the otu_ids, otu_labels, and sample_values
    const result = filteredSample[0];
    const otu_ids = result.otu_ids;
    const otu_labels = result.otu_labels;
    const sample_values = result.sample_values;
    // Build a Bubble Chart
    const bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: 'Earth'
      }
  }];
  const bubbleLayout = {
    title: { 
      text: "Bacteria Cultures Per Sample",
    x: 0.05 // Set the title position to the left
  },
    margin: { t: 30, l: 60 },
    hovermode: "closest",
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Number Of Bacteria" },
    autosize: true, // Fit the chart to the container
  font: { family: "Calibri" } // Set font to Calibri
};
    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();
    const barData = [{
      y: yticks,
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];
    // Build a Bar Chart
    const barLayout = {
      title: {
        text: "Top 10 Bacteria Cultures Found",
        x: 0.05 // Set the title position to the left
      },
      margin: { t: 30, l: 60 },
      xaxis: { 
        title: "Number of Bacteria", // Set the title for the x-axis
        automargin: true, // Enable automatic margin adjustment for the labels
        tickfont: {
          family: 'Calibri' // Set font style to Calibri for the tick labels
      }
  },
    yaxis: { 
        automargin: true // Enable automatic margin adjustment for the labels
    },
      font: {
        family: 'Calibri'
    }
  };
    // Render the Bar Chart
    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data)

    // Get the names field
     const sampleNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const selector = d3.select("#selDataset");
    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    sampleNames.forEach((sample) => {
            selector
                  .append("option")
                  .text(sample)
                  .property("value", sample);
     });
  // Get the first sample from the list
   const firstSample = sampleNames[0];
  // Build charts and metadata panel with the first sample 
  buildCharts(firstSample);
  buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
