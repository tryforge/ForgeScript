import time
start = time.process_time()
x = 0
while x != 1000000:
    x = x + 1
print((time.process_time() - start) * 1000)