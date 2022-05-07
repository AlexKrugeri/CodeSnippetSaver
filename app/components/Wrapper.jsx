

export default function Wrapper ({ children }){
    return(
        <div className="w-full h-full p-4 md:m-4 mt-4 overflow-y-auto">
            <div className="border-1 border-dotted">
                {children}
            </div>
      </div>
    );
}