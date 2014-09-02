Polymer-web-components
======================

Custom components using Polymer

This is repo for creating custom components using http://www.polymer-project.org

Brief overview:

The first set of custom components comprises of tile components
In order to use the component perform the below steps:

1. Run a local server. You can use node's connect serve-static command for this
2. Import the polyfill file platform.js in your HTML file
    
    <script type='text/javascript' src='js/platform.js' ></script>
    
3. Import the custom elements in your HTML file as below:

    <link rel='import' href='elements/x-tile/x-tile.html'>
		<link rel='import' href='elements/x-tile-flip/x-tile-flip.html'>

4. Add the component <x-tile> for static tile component as below. You can also give Optional attributes

    <x-tile size='large' bgColor="goldenrod" text="Tile large"></x-tile>
		<x-tile size='small' bgColor="steel-blue" text="Tile small" textPosition='right'></x-tile>

5. Add the component <x-tile-flip> for flipping tile component as below

    <x-tile-flip></x-tile-flip>

Check the index.html file for running demo of same.
