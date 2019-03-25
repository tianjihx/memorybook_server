import rpyc

conn = rpyc.connect('66.42.39.110', 12233)
result = conn.root.sync_memorybook()
print(result)

conn.close()