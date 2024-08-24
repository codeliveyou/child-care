import { useNavigate } from "react-router-dom";

import TradeMark from "../../components/user/TradeMark";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const Payment = () => {
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  return (
    <div className="w-full h-full grid grid-cols-2 rounded-lg overflow-hidden">
      {/* Left section with background and content */}
      <div className="bg-primary-background">
        <div className="py-7 px-8 h-full flex flex-col">
          {/* Trademark component with styling */}
          <TradeMark className="font-extrabold text-xl leading-6" />
          <div className="grow flex items-center justify-center">
            <div className="max-w-[315px] w-full flex flex-col gap-y-6">
              {/* Heading for profile customization */}
              <p className="font-extrabold text-2xl leading-8 text-white">
                Anpassa din profil för att få tillgång till och
                betalningstjänster.
              </p>
              {/* Input field for company code */}
              <Input
                name="code"
                placeholder="Företag kod"
                className="border border-white/50 placeholder:text-light-background text-light-background bg-white/10"
              />
              {/* Instructions for specifying payment method */}
              <p className="text-[10px] leading-3 text-disabled-text">
                Eftersom du inte har angett en specifik företagskod, fyll i
                betalningsmetoden. Kan du vara vänlig och specificera vilken
                betalningsmetod du vill använda? Till exempel, kreditkort,
                Swish, faktura.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right section with payment options */}
      <div className="bg-white">
        <div className="py-4 px-8 h-full flex flex-col">
          <div className="relative grow flex flex-col items-center justify-center gap-y-2">
            {/* Heading for payment options */}
            <p className="font-extrabold text-2xl leading-8">
              Betalningsalternativ
            </p>
            <div className="py-1 grid grid-cols-2 gap-x-2">
              {/* Payment option for subscription */}
              <div
                className="py-4 px-3 flex items-center justify-center gap-x-2.5 border border-primary-border/25 rounded-lg hover:bg-primary-background hover:border-primary-background hover:text-white cursor-pointer group"
                onClick={() => {
                  // Navigate to payment detail page with subscription method
                  navigate(
                    `/auth/payment-detail?${new URLSearchParams({
                      method: "subscription",
                    })}`
                  );
                }}
              >
                <img src="/images/auth/klarna.png" alt="Pay icon" />
                <span className="text-base leading-5 text-primary-placeholder group-hover:text-white">
                  Prenumeration
                </span>
              </div>
              {/* Payment option for hourly rates */}
              <div
                className="py-4 px-3 flex items-center justify-center gap-x-2.5 border border-primary-border/25 rounded-lg hover:bg-primary-background hover:border-primary-background hover:text-white cursor-pointer group"
                onClick={() => {
                  // Navigate to payment detail page with hourly method
                  navigate(
                    `/auth/payment-detail?${new URLSearchParams({
                      method: "hourly",
                    })}`
                  );
                }}
              >
                <img src="/images/auth/klarna.png" alt="Pay icon" />
                <span className="text-base leading-5 text-primary-placeholder group-hover:text-white">
                  Timpriser
                </span>
              </div>
            </div>
            {/* Button to navigate back to sign-up page */}
            <Button
              size="small"
              variant="outlined"
              className="absolute bottom-2.5 right-1"
              onClick={() => {
                navigate("/auth/sign-up");
              }}
            >
              Tillbaka
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
