import requests
from datetime import date
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

class BilleteraVirtual(object):

    def __init__(self):
        self.accion = None
        self.criptos = None
        self.criptomonedas = {'BTC': 'Bitcoin', 'ETH': 'Ethereum'}
        self.usuarios = {'001': 'Usuario X', '002': 'Usuario Y'}
        self.montos = {'008': 500, '009': 600}
        self.historicos = []
        self.today = (date.today()).strftime('%d/%m/%Y')

    def getAccion(self):
        return self.accion

    def initApp(self):
        print("""
            Bienvenido Usuario Alfa - Codigo: 008 \n
            ------------------------------------- \n
        """)
        self.accion = input("""
            Ingrese un numero para realizar una accion. \n
            1- Recibir cantidad: \n
            2- Transferir monto: \n
            3- Mostrar balance de una moneda: \n
            4- Mostrar balance general: \n
            5- Mostrar historico de transacciones: \n
            6- Salir del programa: \n
        """)

        if (self.accion == "1"):
            self.recibir()
        elif (self.accion == "2"):
            self.transferir()
        elif (self.accion == "3"):
            self.mostrarBalanceDeUnaMoneda()
        elif (self.accion == "4"):
            self.mostrarBalanceGeneral()
        elif (self.accion == "5"):
            self.mostrarHistoricoTransacciones()
        elif (self.accion == "6"):
            exit()

    def recibir(self):
        isMonedaCorrecta = False
        moneda = input("Ingrese el codigo de la moneda la cual quiere recibir: ")
        for key in self.criptomonedas:
            if(key == moneda):
                isMonedaCorrecta = True
        
        if(isMonedaCorrecta == False):
            print("Moneda Incorrecta")
            exit()
        
        cantidad = input("Ingresar la cantidad: ")
        if(int(cantidad) <= 0):
            print("Cantidad ingresada incorrecta")
            exit()

        codigo = input("Ingrese el codigo: ")
        if(codigo == "008"):
            print("El codigo ingresado debe ser diferente al de uno mismo.")
            exit()
        
        self.montos[codigo] = self.montos[codigo] - int(cantidad)
        self.montos["008"] = self.montos["008"] + int(cantidad)
        
        self.historicos.append("Fecha: "+self.today+" - Tipo de Operacion: Recibir - Moneda: "+moneda+" - Codigo: "+codigo+" - Cantidad: "+cantidad)
        self.initApp()
    
    def transferir(self):
        isMonedaCorrecta = False
        moneda = input("Ingrese el codigo de la moneda la cual quiere transferir: ")
        for key in self.criptomonedas:
            if(key == moneda):
                isMonedaCorrecta = True
        
        if(isMonedaCorrecta == False):
            print("Moneda Incorrecta")
            exit()
        
        cantidad = input("Ingresar la cantidad: ")
        if(int(cantidad) <= 0):
            print("Cantidad ingresada incorrecta")
            exit()

        codigo = input("Ingrese el codigo: ")
        if(codigo == "008"):
            print("El codigo ingresado debe ser diferente al de uno mismo.")
            exit()
        
        self.montos[codigo] = self.montos[codigo] + int(cantidad)
        self.montos["008"] = self.montos["008"] - int(cantidad)
        
        self.historicos.append("Fecha: "+self.today+" - Tipo de Operacion: Transferir - Moneda: "+moneda+" - Codigo: "+codigo+" - Cantidad: "+cantidad)
        self.initApp()

    def mostrarBalanceDeUnaMoneda(self):
        isMonedaCorrecta = False
        moneda = input("Ingrese el codigo de la moneda la cual quiere transferir: ")
        for key in self.criptomonedas:
            if(key == moneda):
                isMonedaCorrecta = True

        if(isMonedaCorrecta == False):
            print("Moneda Incorrecta")
            exit()

        self.getCriptos(moneda)
    
    def mostrarBalanceGeneral(self):
        for key in self.criptomonedas:
            self.getCriptos(key)
    
    def mostrarHistoricoTransacciones(self):
        for i in self.historicos:
            print({i})
        self.initApp()

    def getCriptos(self, cripto):
        headers = {  'Accepts': 'application/json',  'X-CMC_PRO_API_KEY':  'a2fa23b8-1069-4a37-8adb-f044b20063c1'}
        parametros = {'symbol': cripto}

        try:
            response = requests.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",headers=headers, params=parametros)
            data = json.loads(response.text)
            print(data)
        except (ConnectionError, Timeout, TooManyRedirects) as e:
            print(e)
