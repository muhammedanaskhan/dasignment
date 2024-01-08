import React from 'react'
import './Transactions.css'
import tableData from '../../constants/tableData'
function Transactions() {

  return (
    <div className='transactions'>
      <p className='transactionsTitle'>Transactions | This Month</p>
      <div className="transactionsTable">
        <div className="tableHeader">
          <div className="tableSearchBar">
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-search-icon">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder="Search by Order ID..." />
          </div>
          <div className="tableHeaderBtns">
            <div className="sortBtn">
              Sort
              <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="svg-up-down-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
            </div>
            <div className="downloadBtn">
              <img src="./downloadIcon.svg" alt="download" />
            </div>
          </div>
        </div>
        <div className="tableBody">
          <table>
            <thead>
              <tr>
                <td>Order ID</td>
                <th className='th-orderDate'>
                  Order date
                  <img src="./tableIcons/orderDateDropdown.svg" alt="sort" />
                </th>
                <th className='th-orderAmt'>Order amount</th>
                <td className='th-transactionFee'>
                  Transaction fees
                  <img src="./tableIcons/iBtn.svg" alt="sort" />
                </td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => { 
                return (
                  <tr>
                    <td class="orderId">{item.orderId}</td>
                    <td class="orderDate">{item.orderDate}</td>
                    <td class="orderamount">{`₹${item.orderamount}`}</td>
                    <td class="transactionFees">{`₹${item.transactionFees}`}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="paginationComponent">
              <div className="pagination">
                <div className='prevBtn'>
                  <img src='/tableIcons/leftArrow.svg' alt='previous'/>
                  <p>Previous</p>
                </div>
                <div className='pages'>
                  <div className='page'>
                    <span>1</span>
                  </div>
                  <div className='dashes'>...</div>
                  <div className='page selected'>
                  <span>10</span>
                  </div>
                  <div className='page'>
                  <span>11</span>
                  </div>
                  <div className='page'>
                  <span>12</span>
                  </div>
                  <div className='page'>
                  <span>13</span>
                  </div>
                  <div className='page'>
                  <span>14</span>
                  </div>
                  <div className='page'>
                  <span>15</span>
                  </div>
                  <div className='page'>
                  <span>16</span>
                  </div>
                  <div className='page'>
                  <span>17</span>
                  </div>
                  <div className='page'>
                  <span>18</span>
                  </div>
                </div>
                <div className='nexBtn'>
                  <p>Next</p>
                  <img src='/tableIcons/rightArrow.svg' alt='next'/>
                </div>
              </div>
        </div>  
      </div>
    </div>
  )
}

export default Transactions