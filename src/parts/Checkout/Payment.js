import React from "react";
import { Fade } from "react-reveal";
import { InputText, InputFile } from "elements/Form";

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;
  const tax = 10;
  const subTotal = itemDetails?.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-5 border-right py-5 px-5">
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>

              {itemDetails?.bank?.map((item) => (
                <div className="row mt-4">
                  <div className="col-3 text-right">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_HOST}/${item.imageUrl}`}
                      alt={item.nameBank}
                      width="60"
                    />
                  </div>
                  <div className="col">
                    <dl>
                      <dd>{item.nameBank}</dd>
                      <dd>{item.nomorRekening}</dd>
                      <dd>{item.name}</dd>
                    </dl>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
          <div className="col-12 col-lg-5 py-5 px-5">
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />
              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
