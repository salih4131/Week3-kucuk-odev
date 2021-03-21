
import './App.css';

function App() {
  return (
  <div>
    <h3>Input Format</h3>
    <p>first line contains <i><b>N.N</b></i> lines follow, each having a PAN number. </p>
    <h3>Constraints</h3>
    <ul>
      <li> 1 ≤ N ≤ 10 </li>
      <li>Each char is an uppercase letter,i.e.,<i><b>char</b></i> ∈ [<i><b>'A','Z'</b></i>].</li>
      <li>Each digit lies between 0 and 9, i.e.,<i><b>digit</b></i> ∈ [<b>0,9</b>]. </li>
      <li>The lenght of the PAN number is always 10, i.e.,<i><b>lenght(PAN)</b></i><b>=10</b></li>
      <li>Every character in PAN is either char or digit satisfying the above constraints.</li>
    </ul>
    <h3>Output Format</h3>
    <p>For every PAN number listed, print YES if it is valid and NO if it isnt't.</p>
    
  </div>
    
  );
}

export default App;
