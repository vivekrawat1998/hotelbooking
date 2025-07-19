import React, { createContext, useContext, useState } from 'react';

const RoomContext = createContext();

export const useRoomContext = () => useContext(RoomContext);

export const RoomProvider = ({ children }) => {
    const [roomId, setRoomId] = useState(null);
    const [categoryId, setCategoryId] = useState(null);

    return (
        <RoomContext.Provider value={{ roomId, setRoomId, categoryId, setCategoryId }}>
            {children}
        </RoomContext.Provider>
    );
};
