import React from "react";
import { useState } from "react";
import "./DonatorForm.css";

function DonatorForm() {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [numberOfLaptops, setNumberOfLaptops] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [deliveryOption, setDeliveryOption] = useState("");

	function handleClick(e) {
		if (e.target.name === "name") {
			setName(e.target.value);
		} else if (e.target.name === "address") {
			setAddress(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "phoneNumber") {
			setPhoneNumber(e.target.value);
		} else if (e.target.name === "numberOfLaptops") {
			setNumberOfLaptops(e.target.value);
		} else if (e.target.name === "deliveryOption") {
			setDeliveryOption(e.target.value);
		} else {
			return null;
		}
	}

	function submitForm(e) {
		e.preventDefault();
		setName("");
		setEmail("");
		setAddress("");
		setPhoneNumber("");
		setNumberOfLaptops("");
		setDeliveryOption("");

		fetch("/api/laptop_donation", {
			method: "POST",
			body: JSON.stringify({
				name: name,
				email: email,
				address: address,
				phoneNumber: phoneNumber,
				numberOfLaptops: numberOfLaptops,
				deliveryOption: deliveryOption,
			}),
			headers: { "content-type": "application/json" },
		});
	}
	return (
		<>
			<form className="donator_form" onSubmit={submitForm}>
				<div>
					{/* add required */}
					<input
						placeholder="Name"
						value={name}
						name="name"
						className="input_field"
						onChange={handleClick}
					/>
					<input
						placeholder="Address"
						value={address}
						name="address"
						className="input_field"
						onChange={handleClick}
					/>
					<input
						type="number"
						placeholder="Amount of laptops"
						value={numberOfLaptops}
						name="numberOfLaptops"
						className="input_field"
						onChange={handleClick}
					/>
					<input
						placeholder="Phone number"
						value={phoneNumber}
						name="phoneNumber"
						className="input_field"
						onChange={handleClick}
					/>
					<input
						placeholder="Email"
						value={email}
						name="email"
						className="input_field"
						onChange={handleClick}
					/>
				</div>

				<p>How would you like the laptop to be transfered?</p>

				<div>
					<div>
						<input
							type="radio"
							name="deliveryOption"
							value="PICKUP"
							onChange={handleClick}
						/>
						<label>I would like someone to come pick it up</label>
					</div>
					<div>
						<input
							type="radio"
							name="deliveryOption"
							value="DROPOFF"
							onChange={handleClick}
						/>
						<label>I would like to drop it off at a collection point</label>
					</div>

					<div>
						<input
							type="radio"
							name="deliveryOption"
							value="SHIP"
							onChange={handleClick}
						/>
						<label>I would like to ship it via post/courier</label>
					</div>
				</div>

				<button>Donate</button>
			</form>
		</>
	);
}

export default DonatorForm;
