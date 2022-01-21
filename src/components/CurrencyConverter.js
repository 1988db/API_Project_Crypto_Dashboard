import { useState} from 'react';
import ExchangeRate from './ExchangeRate';
import axios from 'axios';

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
  const [amount, setAmount] = useState(1);
  console.log(amount);

  const convert = () => {
    

       const options = {
       method: 'GET',
       url: 'https://alpha-vantage.p.rapidapi.com/query',
       params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
       headers: {
         'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
         'x-rapidapi-key': 'd25c95f5f2msh2f5f454ce3aaac5p15efb4jsn3ae259e71d27'
            }
       };

       axios.request(options).then(function (response) {
	     console.log(response.data);
       }).catch(function (error) {
	     console.error(error);
       });
  }

    return (
      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div className="input-box">
          <table>
          <tbody>
            <tr>
              <td>Primary currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value = {amount}
                  onChange = {(e) => setAmount(e.target.value)}
                  >
                </input>
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}>
                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value = {""}>
                </input>
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}>
                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>Convert</button>
        </div>        
        <ExchangeRate/>
      </div>
    );
  }
  
  export default CurrencyConverter;