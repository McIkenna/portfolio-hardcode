import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react'


const bubbleChart = [
    { name: "Java 8", title: "Java", group: "Java", value: 32980, color: 'blueviolet' },
    { name: "Spring MVC", title: "Spring MVC/Java", group: "Java", value: 709, color: 'aliceblue' },
    { name: "Maven", title: "Maven/Java/cluster", group: "Java", value: 500 , color: '#f7e98e'},
    { name: "Hibernate", title: "Hibernate/Java/cluster", group: "Java", value: 3938, color: 'Indigo' },
    { name: "Spring Boot", title: "Spring Boot/Java/cluster/CommunityStructure", group: "Java", value: 3812, color: 'Teal' },
    { name: "JWT", title: "JWT/Java/cluster/HierarchicalCluster", group: "Java", value: 6714 , color: 'blanchedalmond'},
    { name: "Log4j", title: "Log4j/Java/cluster/MergeEdge", group: "Java", value: 743 , color: 'Violet'},
    { name: "J2EE", title: "J2EE/Java/graph", group: "Java", value: 3980, color: '#1e90ff' },
    { name: "JDBC", title: "JDBC/Java/graph/BetweennessCentrality", group: "Java", value: 3534, color: '#4f86f7'},
    { name: "Servelets", title: "Servelets/Java/graph/LinkDistance", group: "Java", value: 5731, color: 'blueviolet'},
    { name: "JavaScript", title: "JavaScript", group: "JavaScript", value: 28840, color: 'brown'},
    { name: "React.js", title: "React.js/JavaScript/graph/ShortestPaths", group: "JavaScript", value: 30914 , color: '#fbe96c'},
    { name: "Node.js", title: "Node.js/JavaScript/graph/SpanningTree", group: "JavaScript", value: 3416 , color: 'burlywood'},
    { name: "ExpressJS", title: "ExpressJS/JavaScript/optimization", group: "JavaScript", value: 6789, color: "Silver"},
    { name: "Typescript", title: "Typescript/JavaScript/optimization/AspectRatioBanker", group: "JavaScript", value: 7074 , color: 'chartreuse'},
    { name: "Angular", title: "Angular/JavaScript/animate", group: "JavaScript", value: 2590, color: '#ba8759' },
    { name: "Next.js", title: "Next.js/JavaScript/animate/Easing", group: "JavaScript", value: 1010, color: '#00008b' },
    { name: "Python", title: "Python", group: "Python", value: 25842 , color: 'Purple'},
    { name: "Django", title: "Django/Python/interpolate", group: "Python", value: 18000, color: 'Magenta'},
    { name: "Flask", title: "Flask/Python/interpolate/ArrayInterpolator", group: "Python", value: 1983, color: '#cfb53b' },
    { name: "TensorFlow", title: "TensorFlow/Python/interpolate/ColorInterpolator", group: "Python", value: 2047, color: 'chocolate'},
    { name: "Numpy", title: "Numpy/Python/interpolate/DateInterpolator", group: "Python", value: 1375, color: '#c04000'},
    { name: "Scikit-Learn", title: "Scikit-Learn/Python/interpolate/Interpolator", group: "animate", value: 8746, color: 'green'},
    { name: "SQL", title: "SQL", group: "SQL", value: 29025, color: '#b05d54'},
    { name: "Oracle DB", title: "Oracle DB/SQL/interpolate/NumberInterpolator", group: "SQL", value: 5382, color: 'cadetblue' },
    { name: "MySQL", title: "MySQL/SQL/interpolate/PointInterpolator", group: "SQL", value: 13675, color: 'blue' },
    { name: "PostgreSQL", title: "PostgreSQL/SQL/interpolate/RectangleInterpolator", group: "SQL", value: 6042, color: 'Gold' },
    { name: "Microsoft SQL Server", title: "Microsoft SQL Server/animate/ISchedulable", group: "SQL", value: 8041, color: '#c54b8c' },
    { name: "SQLite", title: "SQLite/SQL/Parallel", group: "SQL", value: 8176, color: 'Orange'},
    { name: "NoSQL", title: "NoSQL", group: "NoSQL", value: 20049, color: 'blanchedalmond'},
    { name: "MongoDB", title: "MongoDB/NoSQL/Scheduler", group: "NoSQL", value: 9593, color: 'aliceblue' },
    { name: "DynamoDB", title: "DynamoDB/NoSQL/Sequence", group: "NoSQL", value: 8534, color: 'beige'},
    { name: "Redis", title: "Redis/NoSQL/Transition", group: "NoSQL", value: 901, color: 'bisque'},
    { name: "Neo4j", title: "Neo4j/NoSQL/Transitioner", group: "NoSQL", value: 275, color: 'coral' },
    { name: "Elasticsearch", title: "Elasticsearch/NoSQL/TransitionEvent", group: "NoSQL", value: 116, color: 'aquamarine'},
    { name: "Firebase", title: "Firebase/NoSQL/Tween", group: "NoSQL", value: 5116, color: 'red'},
    { name: "CSS", title: "CSS", group: "CSS", value: 28801, color: '#9f00c5' },
    { name: "Boostrap", title: "Boostrap/CSS/Transition/interpolate", group: "CSS", value: 16000, color: 'antiquewhite'},
    { name: "Material UI", title: "Material UI/CSS/Transition/interpolate", group: "CSS", value: 17021, color: 'aqua' },
    { name: "Materialize CSS", title: "Materialize CSS/CSS/interpolate/Converters", group: "CSS", value: 10221, color: 'aqua' },
    { name: "TailWind CSS", title: "TailWind CSS/CSS/interpolate/Converters", group: "CSS", value: 2721, color: 'aqua' },
    { name: "Chakra UI", title: "Chakra UI/CSS/converters/Converters", group: "CSS", value: 3721, color: 'aqua' },
    { name: "HTML", title: "HTML", group: "HTML", value: 27210, color: 'aqua' },
    { name: "XML", title: "XML/HTML/converters/Converters", group: "HTML", value: 8721, color: 'aqua' },
    { name: "JSX", title: "JSX/HTML/converters/Converters", group: "HTML", value: 24021, color: 'aqua' },
    { name: "Operating Systems", title: "Operating Systems/data/converters/Converters", group: "OS", value: 18210, color: 'aqua' },
    { name: "Linux", title: "Linux/data/converters/Converters", group: "OS", value: 9721, color: 'aqua' },
    { name: "Unix", title: "Unix/data/converters/Converters", group: "OS", value: 2721, color: 'aqua' },
    { name: "Windows", title: "flare/data/converters/Converters", group: "MATLAB", value: 6721, color: 'aqua' },
    { name: "MATLAB", title: "flare/data/converters/Converters", group: "SIMULINK", value: 4721, color: 'aqua' },
    { name: "SIMULINK", title: "flare/data/converters/Converters", group: "data", value: 721, color: 'aqua' },
    { name: "Web Services", title: "flare/data/converters/Converters", group: "Web Services", value: 38021, color: 'aqua' },
    { name: "REST", title: "flare/data/converters/Converters", group: "Web Services", value: 28721, color: 'aqua' },
    { name: "SOAP", title: "flare/data/converters/Converters", group: "Web Services", value: 27721, color: 'aqua' },
    { name: "Testing", title: "flare/data/converters/Converters", group: "Testing", value: 10721, color: 'aqua' },
    { name: "Jest", title: "flare/data/converters/Converters", group: "Testing", value: 4721, color: 'aqua' },
    { name: "Mocha", title: "flare/data/converters/Converters", group: "Testing", value: 3221, color: 'aqua' },
    { name: "Mockito", title: "flare/data/converters/Converters", group: "Testing", value: 6921, color: 'aqua' },
    { name: "JUnit", title: "flare/data/converters/Converters", group: "Testing", value: 7021, color: 'aqua' },
    { name: "PostMan", title: "flare/data/converters/Converters", group: "Testing", value: 5021, color: 'aqua' },
    { name: "Swagger", title: "flare/data/converters/Converters", group: "Testing", value: 521, color: 'aqua' },
    { name: "Selenium", title: "flare/data/converters/Converters", group: "Testing", value: 3721, color: 'aqua' },
    { name: "Project Tools", title: "flare/data/converters/Converters", group: "Project Tools", value: 24021, color: 'aqua' },
    { name: "JIRA", title: "flare/data/converters/Converters", group: "Project Tools", value: 10421, color: 'aqua' },
    { name: "Confluence", title: "flare/data/converters/Converters", group: "Project Tools", value: 10721, color: 'aqua' },
    { name: "Slack", title: "flare/data/converters/Converters", group: "Project Tools", value: 7021, color: 'aqua' },
    { name: "Trello", title: "flare/data/converters/Converters", group: "Project Tools", value: 3721, color: 'aqua' },
    { name: "Asana", title: "flare/data/converters/Converters", group: "Project Tools", value: 15721, color: 'aqua' },
    { name: "Google Drive", title: "flare/data/converters/Converters", group: "data", value: 721, color: 'aqua' },
    { name: "Version Control", title: "flare/data/converters/Converters", group: "Version Control", value: 20721, color: 'aqua' },
    { name: "GIT", title: "flare/data/converters/Converters", group: "Version Control", value: 9721, color: 'aqua' },
    { name: "GitHub", title: "flare/data/converters/Converters", group: "CICD", value: 8721, color: 'aqua' },
    { name: "SourceTree", title: "flare/data/converters/Converters", group: "Version Control", value: 5721, color: 'aqua' },
    { name: "BitBucket", title: "flare/data/converters/Converters", group: "Version Control", value: 4721, color: 'aqua' },
    { name: "Jenkins", title: "flare/data/converters/Converters", group: "CICD", value: 10721, color: 'aqua' },
    { name: "GitHub", title: "flare/data/converters/Converters", group: "CICD", value: 17721, color: 'aqua' },
    { name: "AWS CICD", title: "flare/data/converters/Converters", group: "CICD", value: 15721, color: 'aqua' },
    { name: "Monitoring and Logging", title: "flare/data/converters/Converters", group: "Monitoring and Logging", value: 30721, color: 'aqua' },
    { name: "AWS Cloudwatch", title: "flare/data/converters/Converters", group: "Monitoring and Logging", value: 14721, color: 'aqua' },
    { name: "Sping Actuator", title: "flare/data/converters/Converters", group: "Monitoring and Logging", value: 12721, color: 'aqua' },
    { name: "Splunk", title: "flare/data/converters/Converters", group: "Monitoring and Logging", value: 15721, color: 'aqua' },
    { name: "Morgan", title: "flare/data/converters/Converters", group: "Monitoring and Logging", value: 10721, color: 'aqua' },
    { name: "Spring Security", title: "flare/data/converters/Converters", group: "Security", value: 20721, color: 'aqua' },
    { name: "AWS Cognito", title: "flare/data/converters/Converters", group: "Security", value: 16721, color: 'aqua' },
    { name: "Amazon Web Services", title: "flare/data/converters/Converters", group: "Cloud Services", value: 20721, color: 'aqua' },
    { name: "Google Cloud Platform", title: "flare/data/converters/Converters", group: "Cloud Services", value: 10721, color: 'aqua' },
    { name: "Microsoft Azure", title: "flare/data/converters/Converters", group: "Cloud Services", value: 8721, color: 'aqua' },
    { name: "Heroku (Salesforce)", title: "flare/data/converters/Converters", group: "Cloud Services", value: 9721, color: 'aqua' },
    { name: "Design Patterns & Architecture", title: "flare/data/converters/Converters", group: "Design Patterns & Architecture", value: 27210, color: 'aqua' },
    { name: "Apache Kafka", title: "Apache Kafka", group: "Streaming", value: 14721, color: 'aqua' },
    { name: "SNS", title: "flare/data/converters/Converters", group: "Streaming", value: 8721, color: 'aqua' }


]

const Bubble = ({
  height = window.innerHeight,
  width = window.innerWidth,
  tooltipSize = 12,
  tooltipColor = 'white',
  tooltipFont = 'sans-serif',
  chartData = bubbleChart,
  colourSet = d3.schemeCategory10,
  fillOpacity = 0.5,
}) => {
  const divRef = useRef(null);

  useEffect(() => {
    const pack = data =>
      d3
        .pack()
        .size([width - 2, height - 2])
        .padding(3)(d3.hierarchy({ children: data }).sum(d => d.value));

    const color = data =>
      d3.scaleOrdinal(data.map(d => d.group), colourSet);

    const graphData = pack(chartData);
    const colorData = color(chartData);

    const svg = d3
      .select(divRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('font-size', tooltipSize)
      .attr('font-family', tooltipFont)
      .attr('fill', tooltipColor)
      .attr('text-anchor', 'middle')
      .attr('font-weight', "bold")

    const leaf = svg
      .selectAll('g')
      .data(graphData.leaves())
      .join('g')
      .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`);

    leaf
      .append('circle')
      .attr('id', d => `leaf-${d.r}-${d.data.color}`)
      .attr('r', d => d.r)
      .attr('fill-opacity', fillOpacity)
      .attr('fill', d => colorData(d.data.group));

    leaf
      .append('text')
      .attr('clip-path', d => d.clipUid)
      .selectAll('tspan')
      .data(d => (d.value > 0 ? d.data.name.split(/(?=[A-Z][^A-Z])/g) : ''))
      .join('tspan')
      .attr('x', 0)
      .attr('y', (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
      .text(d => d);
  }, [height, width, tooltipSize, tooltipFont, tooltipColor, chartData, colourSet, fillOpacity]);

  return <div ref={divRef} />;
};

Bubble.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  tooltipSize: PropTypes.number,
  tooltipColor: PropTypes.string,
  tooltipFont: PropTypes.string,
  chartData: PropTypes.array,
  colourSet: PropTypes.array,
  fillOpacity: PropTypes.number,
};

export default Bubble;
