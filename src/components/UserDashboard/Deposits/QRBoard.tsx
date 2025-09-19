import React from 'react';


type QRBoardProps = {
    QRcode : string;
    ContentCopy : string;
};

const QRBoard: React.FC<QRBoardProps> = ({ QRcode, ContentCopy }) => {
    return (
        <div className="w-auto h-auto gap-[24px] px-[40px] py-[20px] flex flex-col justify-center items-center qrBoard mt-[35px]">
          <div className="w-auto h-auto flex flex-col gap-[24px]">
              <img className="w-[101px] h-auto mx-auto" src={QRcode}/>
              <p className="w-auto h-auto text-center mx-auto bd-sm-reg text-[rgb(var(--primary-text))]">This is your static address USDT TRC20. Only send USDT TRC20 tokens to this address or you will lose your funds.</p>
          </div>
          <button className="w-[158px] h-[40px] gap-[px] px-[12px] py-[8px] mx-auto qrBoardButton text-white flex flex-row">
            <img src={ContentCopy}/>
            Copy Address
            </button>
        </div>
    );
};

export default QRBoard;