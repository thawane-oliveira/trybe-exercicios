class TV:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__on = False

    def raise_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def lower_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def turn_channel(self, channel):
        if channel <= 1 or channel >= 99:
            raise ValueError('Canal indisponível')
        
        self.__channel = channel


    def turnon_turnoff(self):
        self.__on = not self.__on