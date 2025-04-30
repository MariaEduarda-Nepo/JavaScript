


numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))


if numero1 > numero2:
    maior = numero1
    menor = numero2
elif numero2 > numero1:
    maior = numero2
    menor = numero1
else:
    maior = menor = numero1


print(f"O maior número é: {maior}")
print(f"O menor número é: {menor}")