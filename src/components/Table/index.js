import React from 'react';
import './style.css';

const Table = () => (
  <div className="containerTable">
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
        <th>Points</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
        <td>94</td>
      </tr>
      <tr>
        <td>Adam</td>
        <td>Johnson</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
        <td>67</td>
      </tr>
    </table>
    <p>
      Table model and data from
      {' '}
      <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_table_responsive">
        w3schools
      </a>
      :
    </p>
  </div>
);

export default Table;
