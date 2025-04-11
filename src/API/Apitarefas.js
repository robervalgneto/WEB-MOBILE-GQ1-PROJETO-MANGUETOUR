import axios from 'axios';

const APP_ID = "onBXEb9pj936zk87dd4a9HpodfWhbDHrhhoOAO4u";
const API_KEY = "ZD2UVKs3Vv6wTr2WrJpqkkAFMa4BtPz8ys2U4m64"; 

const BASE_URL = "https://parseapi.back4app.com/classes/Tarefas";

const headers = {
  "X-Parse-Application-Id": APP_ID,
  "X-Parse-REST-API-Key": API_KEY,
  "Content-Type": "application/json",
};

export const getTarefas = async () => {
  try {
    const response = await axios.get(BASE_URL, { headers });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao obter tarefas:", error);
    return [];
  }
};

export const addTarefa = async (descricao) => {
  try {
    const response = await axios.post(BASE_URL, 
      { descricao },
      { headers }
    );
    return response.data; 
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
    return null;
  }
};

export const updateTarefa = async (id, descricao) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${id}`, 
      { descricao },
      { headers }
    );
    return response.data; 
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);
    return null;
  }
};

export const deleteTarefa = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`, { headers });
    return response.data; 
  } catch (error) {
    console.error("Erro ao excluir tarefa:", error);
    return null;
  }
};
