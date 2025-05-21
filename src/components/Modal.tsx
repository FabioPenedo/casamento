"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";

export default function Modal() {
  const [showModalAviso, setShowModalAviso] = useState(true);

  return (
    <>
      {showModalAviso && (
        <div className="modal-aviso fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="modal-aviso-content bg-white rounded overflow-hidden p-7 relative max-w-md w-full m-4">
            <button
              type="button"
              className="btn modal-aviso-btn-close p-2 absolute top-2 right-2"
              onClick={() => {
                setShowModalAviso((e) => !e);
              }}
            >
              <XCircle size={32} weight="bold" color="#ccc" />
            </button>
            <h2 className="text-xl font-medium mb-3">Comunicado</h2>
            <p className="mb-3">
              Olá, seja bem-vindo ao nosso site!<br /><br />
              Gostaríamos de informar que há duas formas de pagamento disponíveis:
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>Pix, conforme indicado na tela;</li>
              <li>Cartão de crédito (sem possibilidade de parcelamento).</li>
            </ul>
            <p className="mb-3">
              Caso prefira presentear de outra forma, entre em contato conosco.
            </p>
            <p className="mb-1">
              Agradecemos pela sua visita e consideração!
            </p>
          </div>
        </div>
      )}
    </>
  )
}