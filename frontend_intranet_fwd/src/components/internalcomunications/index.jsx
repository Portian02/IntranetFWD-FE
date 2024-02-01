import React, { useState, useEffect } from "react";
import "./communication.css";
import Navbar from "../NavBar";
import { fetchCommunicationInternals } from "../../services/ApiCommunications";
import Modals from "../../components/internalcomunications/modalInternalCommunication/modals";
import MyButton from "./DeleteCommunication/ButtonDelete";
import UpdateModals from "./updatecommunications/modalToUpdate";
import Loading from "../loader";

const Internalcommunications = () => {
  const [comunications, setcomunication] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCommunicationInternal() {
      try {
        const data = await fetchCommunicationInternals();
        setcomunication(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load calendars", error);
      }
    }

    loadCommunicationInternal();
    Internalcommunicationsusers();
  }, []);

  const role = localStorage.getItem("role");

  const Internalcommunicationsusers = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/internal_communications_users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      for (let index = 0; index < data.length; index++) {
        const id_usuario_log = localStorage.getItem("id_usuario_log");
        if (data[index].user_id === parseInt(id_usuario_log)) {
          // Do something with the data[index]
        }
      }
      return data;
    } catch (error) {
      console.error("Failed to fetch internal commmunications", error);
      throw error;
    }
  };

  localStorage.setItem("id_registro", comunications.at(-1)?.id);
  console.log(comunications.at(-1)?.id, "soy el ultimo registro");

  return (
    <div className="container-cm">
      <Navbar />
      <h2 className="internal-communications-title">Communication</h2>
      {isLoading ? (
        <div className="loading">
          <Loading />
          <h3 className="mt-5 mr-3"> Loading...</h3>
        </div>
      ) : comunications.length === 0 ? (
        <h2 className="d-flex justify-content-center  mt-5 no-data ">
          There is no any data
        </h2>
      ) : (
        <div className="internal-communications">
          {comunications.map((comunication) => (
            <div class="notifications-container">
              <div class="success">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg
                      class="succes-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div class="success-prompt-wrap">
                    <p class="success-prompt-heading">{comunication.title}</p>
                    <div class="success-prompt-prompt">
                      <p> {comunication.content}</p>
                    </div>
                    <div class="success-button-container">
                      <button type="button" class="success-button-main">
                        {role === "admin" && <MyButton id={comunication.id} />}
                      </button>
                      <button type="button" class="success-button-secondary">
                        {role === "admin" && (
                          <UpdateModals
                            id={comunication.id}
                            initialData={comunication}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {role === "admin" && <Modals />}
        </div>
      )}
    </div>
  );
};

export default Internalcommunications;
