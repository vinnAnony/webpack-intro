import '../css/styles.css';
//import "../images/kobe-bryant.jpeg"

const requireContext = require.context("../images", true, /\.(png|jpe?g|svg)$/);
requireContext.keys().map(requireContext);
