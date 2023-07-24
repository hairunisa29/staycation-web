import Button from "elements/Button";
import React from "react";
import useRegularHooks from "hooks/useRegularHooks";

export default function NotFound() {
  const { navigate } = useRegularHooks();
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          Are you lost?
          <p className="pt-4">Some pages are still in development</p>
          <div>
            <Button
              className="btn mt-5"
              type="button"
              onClick={() => navigate(-1)}
              isLight
            >
              Yes, bring me to safe place
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
