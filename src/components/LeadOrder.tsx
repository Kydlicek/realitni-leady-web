"use client";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { LoginButton } from "@/components/ActionLink";

const LeadRequestForm = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [leadCount, setLeadCount] = useState(10);

  // Calculate approximate price
  const approximatePrice = Number(leadCount) * 200;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Vytvořte poptávku na realitní leady
      </h2>
      {/* Location Select */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="location"
        >
          Lokace
        </label>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="lokace" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Praha">Praha</SelectItem>
            <SelectItem value="Brno">Brno</SelectItem>
            <SelectItem value="Ostrava">Ostrava</SelectItem>
            <SelectItem value="Plzeň">Plzeň</SelectItem>
            <SelectItem value="Liberec">Liberec</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Property Type Select */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="propertyType"
        >
          Typ nemovitosti
        </label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="typ nemovitosti" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">Dům</SelectItem>
            <SelectItem value="flat">Byt</SelectItem>
            <SelectItem value="office">Kancelář</SelectItem>
            <SelectItem value="warehouse">Sklad</SelectItem>
            <SelectItem value="garage">Garáž</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Transaction Type Select */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="transactionType"
        >
          Typ transakce
        </label>
        <Select value={transactionType} onValueChange={setTransactionType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="typ transakce" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pronajem">Pronájem</SelectItem>
            <SelectItem value="prodej">Prodej</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Lead Count Slider */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="leadCount"
        >
          Počet leadů: {leadCount}
        </label>
        <Slider
          id="leadCount"
          min={1}
          max={100}
          step={1}
          value={[leadCount]}
          onValueChange={(value) => setLeadCount(value[0])}
          className="w-full"
        />
        <input
          type="number"
          id="leadCount"
          value={leadCount}
          onChange={(e) => setLeadCount(Number(e.target.value))}
          min="1"
          max="100"
          className="mt-2 w-full p-2 border rounded-lg"
        />

        {/* Approximate Price */}
        <p className="mt-6 text-gray-700  flex flex-row justify-between">
          <strong>Odhadovaná cena:</strong>{" "}
          <p className="font-semibold text-gray-900">{approximatePrice} Kč</p>
        </p>
      </div>
      {/* Submit Button */}
      <LoginButton text="Odeslat Poptávku" className="w-full" />
    </div>
  );
};

export default LeadRequestForm;
