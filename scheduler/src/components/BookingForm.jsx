import React, {useState} from "react"

export default function BookingForm(){
const [form, setForm] = useState({
    reservationDate:"",
    reservationTime:"",
    guests:"",
    occasion:""

})

return<>
    <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
        <label htmlFor="resDate">Reservation date</label>
<input type="date" value={form.reservationDate} id="resDate"/>
<label htmlFor="resHour"></label>
<select id="resHour">
<option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
</select>
<input type="number" />
<select>
    <option value="">Birthday</option>
    <option value="">Anniversary</option>
</select>
</form>
</>
}